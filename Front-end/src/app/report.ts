export class Report {
    constructor(marks: number,
        user_id: number,
        course_id: number,
        level_id: number) {
        this.marks = marks;
        this.courseId = course_id;
        this.levelId = level_id;
        this.userId = user_id;
    }

    marks: number;
    userId: number;
    courseId: number;
    levelId: number;

    public toString():String{
        return "user_id="+this.userId +"\nlevel_id="+this.levelId +"\ncourse_id="+this.courseId + "\nmarks="+this.marks;
    }
}
