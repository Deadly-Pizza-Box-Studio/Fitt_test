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
    const data = {Name:"score",Score: score}
    fetch("scores.json",
        {
            method:"post",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    .then(json=>json.json())
    .then(result=>console.log(result))
}

document.getElementById("submitbutton").addEventListener("click",()=>
    {
        submit();
    })
