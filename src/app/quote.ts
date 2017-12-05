export class Quote {
    private votes: number;
    constructor(private text: string, private author: string) {
        this.votes = 0;
    }
    getText() {
        return this.text;
    }
    getAuthor() {
        return this.author;
    }
    getVotes() {
        return this.votes;
    }
    setVotes(value) {
        this.votes = value;
    }
}
