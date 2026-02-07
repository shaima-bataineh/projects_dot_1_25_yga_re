// this is backend code runing on the server this code not send t client or visible to user

export async function GET() {
    return Response.json( // 2001 to create / 200
        {
            message:"Hello From API",
            hint:"This is backend code runing on the server",
        });
    
}

