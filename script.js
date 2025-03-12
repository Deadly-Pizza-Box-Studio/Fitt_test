let score = 0;
function submit()
{
    for(let i = 0;i < 13;i++)
        {
            for(let j = 0;j < 3;i++)
                {
                    if(document.getElementById("q"+i.toString()+j.toString()).checked)
                        {
                            score += document.getElementById("q"+i+j).value
                        }
                }
        }
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


