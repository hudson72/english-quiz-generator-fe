import {QuizDto} from "./dto/quiz.dto";

export class QuizApi {
    static async getAll(): Promise<QuizDto[]> {
        const res = await fetch('http://localhost:3000/quizzes', {
            method: 'GET'
        })
        const data = await res.json();
        return data;
    };

    static async getOne(): Promise<QuizDto[]> {
        const res = await fetch('http://localhost:3000/questions/quiz/category', {
            method: 'GET'
        })
        const data = await res.json();
        return data;
    }
}