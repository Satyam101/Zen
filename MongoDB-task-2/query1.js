db.topic.aggregate ([

  {
    $lookup:
    {
      from: "tasks",
      localField: "topic_name",
      foreignField: "task_name",
      as: "output"
    }
  }
  ,

  {
    $match:
    {
      topic_taught_month: "october"
    },},
 
    {
      $unwind:"$output"
    }, 

  {
    $project: {"Topic_Name":"$topic_name","taskss_name":"$output.task_name","Month":"$topic_taught_month"}
  }

 ])


//second

db.company_drives.find({

date:{ $gte:"15-10-2020",
        $lt:"31-10-2020" }
})
 

//fourth


db.codekata.aggregate(
{$group:{
_id:"$user_name",count:{$sum:"$problem_solved"}

}
})


//fifth

db.mentors.find({
mentee_count:{$gt:15}
})


//sixth

