export class Help {
    static contains(baseStr, args) {
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
//# sourceMappingURL=Help.js.map