let score = 0;
function submit()
{
    for(let i = 1;i < 12;i++)
        {
            for(let j = 1;j < 4;j++)
                {
                    console.log("q"+i.toString()+j.toString())
                    if(document.getElementById("q"+i.toString()+j.toString()).checked)
                        {
                            score += parseInt(document.getElementById("q"+i+j).value)
                        }
                }
        }
        console.log(score)
    const payload = {Name:"score",Score: score}
    var data = new FormData()
    data.append("json",JSON.stringify(payload))
    fetch("scores.json",
        {
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: data

        })
    .then(function(res){ return res.json(); })
    .then(function(data){ alert( JSON.stringify( data ) ) })
}

document.getElementById("submitbutton").addEventListener("click",()=>
    {
        submit();
    })
