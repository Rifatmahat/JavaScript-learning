
var DiageoEligibilityCheck = function (grad_score, hsc_score, ssc_score, candidate_name) {
    console.log(grad_score >= 70 );
        var result = grad_score >= 70 || hsc_score >= 80 || ssc_score > 90  // false || true
            ? `Congrates ${candidate_name} you are eligible for Diageo interview`
            : "Unfortunately you are not eligible for interview";
        console.log(result);
    }
    DiageoEligibilityCheck(80, 86, 90, "Rifat Mahat");
    DiageoEligibilityCheck(69, 65, 95, "M Rifat");
    