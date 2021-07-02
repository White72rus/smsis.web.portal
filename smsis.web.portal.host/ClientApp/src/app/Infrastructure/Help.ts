export class Help {

    public static contains(baseStr : string, args: string[]) : boolean{

        for (const key in args) {
            if (Object.prototype.hasOwnProperty.call(args, key)) {
                const element = args[key];
                if (baseStr === element) {
                    return true;
                }
            }
        }
        return false;
    }
}