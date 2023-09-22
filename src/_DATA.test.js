var databaseFunctions = require('./database/_DATA');

describe('can I get all the users?', () => {
    it('will return a list of users', async () => {
        var result = await databaseFunctions._getUsers();
        expect(Object.values(result).length).toBeGreaterThan(0)
    })
})

describe('can I save a question successfully with _saveQuestion()?', () => {
    it('will return the proper object, if passed proper parameters', async () => {
        var question = {
            optionOneText: "Test with jest",
            optionTwoText: "Test with cypress",
            author: "mtsamis"
        }
        var result = await databaseFunctions._saveQuestion(question);
        expect(result.author).toEqual("mtsamis")
        expect(result.optionOne.text).toEqual(question.optionOneText)
        expect(result.optionTwo.text).toEqual(question.optionTwoText)
    })

    it('will reject if the required parameters are not passed', async () => {
        var question = {
            optionOneText: "Test with jest",
            optionTwoText: "Test with cypress",
        }
        await expect(databaseFunctions._saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author")
    })
})

describe('can I save an answer successfully with _saveQuestionAnswer()?', () => {
    it('will return true if the input object is structured correctly', async () => {
        var questionInfo = {
            authedUser: "sarahedo",
            qid: "xj352vofupe1dqz9emx13r",
            answer: "optionOne"
        }
        var result = await databaseFunctions._saveQuestionAnswer(questionInfo);
        expect(result).toEqual(true);
    });

    it('will reject if the input object is structured incorrectly', async () => {
        var questionInfo = {
            qid: "xj352",
            answer: "optio"
        }
        await expect(databaseFunctions._saveQuestionAnswer(questionInfo)).rejects.toEqual("Please provide authedUser, qid, and answer")
    });

})

