function gradeSystem(score){

    if (score >=0 && score<35){
        console.log("You are failed")
    }

    else if (score == 35){
        console.log("You are passed")
    }

    else if (score >=35 && score < 60){
        console.log("You are passed and Grade C")
   }

   else if (score >=60 && score < 75 ){
    console.log("You are passed and Grade B")
   }
}