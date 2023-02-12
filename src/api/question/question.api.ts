import {QuestionDto} from "./dto/question.dto";

export class QuestionApi {
    static async getAll(): Promise<QuestionDto[]> {
        const res = await fetch('http://localhost:3000/questions', {
            method: 'GET'
        })
        const data = await res.json();
        return data;
    };

    static async getOneQuizQuestions(): Promise<QuestionDto[]> {
        const res = await fetch('http://localhost:3000/questions/quiz/category/' + new URLSearchParams({
            questionCategory: 'Articles02'
            // method: 'GET'
        }))
        const data = await res.json();
        return data;
    }
}