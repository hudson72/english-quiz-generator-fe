import {QuestionDto} from "./dto/questionDto";

export class QuizApi {
    static async getAll(): Promise<QuestionDto[]> {
        const res = await fetch('http://localhost:3000/quizzes', {
            method: 'GET'
        })
        const data = await res.json();
        return data;
    };

    static async getOne(): Promise<QuestionDto[]> {
        const res = await fetch('http://localhost:3000/questions/quiz/category', {
            method: 'GET'
        })
        const data = await res.json();
        return data;
    }
}