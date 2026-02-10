import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { ok, fail } from "@/lib/response";

export async function GET() {
    try {
        await connectDB();
        const users = await User.find().select("-password").sort({ createdAt: -1 });
        return ok(users);
    } catch (e) {
        return fail("Failed to fetch users", 500, e.message);
    }
}

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();
        const created = await User.create(body);
        const safe = await User.findById(created._id).select("-password");
        return ok(safe, 201);
    } catch (e) {
        if (e.code === 11000) return fail("Email already exists", 409);
        return fail("Failed to create user", 400, e.message);
    }
}

export async function DELETE(req) {
    try {
        await connectDB();
        const body = await req.json();
        const deleted = await User.findByIdAndDelete(body.id);
        if (!deleted) return fail("User not found", 404);
        return ok(deleted);
    } catch (e) {
        return fail("Failed to delete user", 400, e.message);
    }
}
