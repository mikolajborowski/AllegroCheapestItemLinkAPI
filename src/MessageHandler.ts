export class MessageHandler {
    public returnMessage(code: number, message:string){
        return JSON.parse(`{"code": "${code}", "message": "${message}"}`);
    }
}