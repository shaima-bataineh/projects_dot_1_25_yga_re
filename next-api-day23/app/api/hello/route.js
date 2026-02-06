export async function GET() {
    return Response.json( // 2001 to create / 200
        {
            message:"Hello From API",
            hint:"This is backend code runing on the server",
        });
    
}

