import * as yup from 'yup';

class Validator {
    constructor(url, feeds) {
        this.url = url;
        this.feedsUrl = feeds.map((feed) => feed.url);
    }

    async validatorFormat() {
        const schema = yup.string().url().required();
        return await schema.isValid(this.url)
    }

    async validatorDoubles() {
        const schema = yup.mixed().notOneOf(this.feedsUrl);
        return await schema.isValid(this.url)
    }
}

export default Validator;