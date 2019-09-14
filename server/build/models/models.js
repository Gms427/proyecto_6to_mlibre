"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(Content, Speaker) {
        this.Content = Content;
        this.Speaker = Speaker;
    }
}
exports.Message = Message;
var Speaker;
(function (Speaker) {
    Speaker[Speaker["USER"] = 1] = "USER";
    Speaker[Speaker["ADMIN"] = 2] = "ADMIN";
})(Speaker = exports.Speaker || (exports.Speaker = {}));
var PublicationStates;
(function (PublicationStates) {
    PublicationStates[PublicationStates["NORMAL"] = 1] = "NORMAL";
    PublicationStates[PublicationStates["SUSPENDED"] = 2] = "SUSPENDED";
    PublicationStates[PublicationStates["FINISHED"] = 3] = "FINISHED";
    PublicationStates[PublicationStates["DELETED"] = 4] = "DELETED";
    PublicationStates[PublicationStates["DENOUNCED"] = 5] = "DENOUNCED"; // Denunciada, cuando alguien le hace una denuncia, estas aparecen en la adminApp para revisarlas
})(PublicationStates = exports.PublicationStates || (exports.PublicationStates = {}));
