export class ViewReport {
    report_id:number;
    userId:number;
    test_id:number;
    level1_score:number;
    level2_score:number;
    level3_score:number;

    constructor(report_id: number,
        userId:number,
        test_id:number,
        level1_score:number,
        level2_score:number,
        level3_score:number,) {
        
        this.report_id=report_id;
        this.userId = userId;
        this.test_id = test_id;
        this.level1_score = level1_score;
        this.level2_score = level2_score;
        this.level3_score = level3_score;
    }

}
