let btn = document.querySelector('button');
let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

btn.addEventListener("click", async function(){
    let word = document.querySelector('input').value;
    if(!word){
        alert('Please enter any word');
    }else
    getMeaning(word);
})

async function getMeaning(word){
    try{
        let res = await axios.get(url + word);
        let ansArr = res.data;
        let finalans = ansArr[0].meanings[0].definitions;
        let list = document.querySelector('#list');
        list.innerText = "";

        finalans.slice(0, 5).forEach(ans => {
            let li = document.createElement('li');
            li.innerText = ans.definition;
            list.appendChild(li);
        });
    } catch(e){
        alert('Sorry! Meaning not found. Try another word.');
    }
}
