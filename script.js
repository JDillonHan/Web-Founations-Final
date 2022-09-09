$.ajax('https://api.adviceslip.com/advice',
{
    success: function (APIResponse) {

        let fact = document.createElement('div');

        let factTag = document.createElement('p');
        factTag.innerHTML = "Advice of the Day: " +APIResponse.activity;

        fact.appendChild(factTag);

        document.body.appendChild(fact);
        console.log(APIResponse);
    }
})