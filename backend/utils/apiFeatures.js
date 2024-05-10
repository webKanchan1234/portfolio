class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr
            ? {
                "$or": [
                    {
                        category: {
                            $regex: this.queryStr,
                            $options: "i",
                        },
                    },
                    {
                        title: {
                            $regex: this.queryStr,
                            $options: "i",
                        }
                    },
                    {
                        subtitle: {
                            $regex: this.queryStr,
                            $options: "i",
                        }
                    },
                    {
                        description: {
                            $regex: this.queryStr,
                            $options: "i",
                        }
                    },
                    
                ],
            }
            : {};

        this.query = this.query.find({ ...keyword });
        return this;
    }
}
module.exports = ApiFeatures;
