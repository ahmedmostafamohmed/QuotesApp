var btn = document.getElementById("btn"),
    output = document.getElementById("output"),
    quotes = [
        `أفضل انتقام هو النجاح الهائل
        <br>- Oscar Wilde` ,

        `إذا كنت لا تستطيع التعامل معي في أسوأ حالاتي ، فأنت متأكد من أن الجحيم لا يستحقني في أفضل حالاتي."
        <br>- Marilyn Monroe`

        , `هناك شيئان لانهائيان: الكون وغباء الإنسان. ولست متأكدا من الكون
        <br>- Albert Einstein`
        , `من الأفضل أن تكون مكروهًا لما أنت عليه من أن تكون محبوبًا على ما لست عليه
        <br>- Andre Gide`

        , `بدون موسيقى الحياة ستكون غلطة
        <br>- Friedrich Nietzsche`

        , `الصديق هو الشخص الذي يعرف كل شيء عنك ولا يزال يحبك
        <br>- Elbert Hubbard` ,

        `عش كأنك ستموت غدا. تعلم كأنك تعيش للابد
        <br>- Mahatma Gandhi` ,

        `إذا قلت الحقيقة ، فلا داعي لتذكر أي شيء
        <br>- Mark Twain` ,

        `نقبل الحب الذي نظن اننا نستحقه
        <br>- Stephen Chbosky` 

        ,`أفضل انتقام هو النجاح الهائل
        <br>- Frank Sinatra`

        , `بعد عشرين عامًا من الآن ، ستصاب بخيبة أمل بسبب الأشياء التي لم تفعلها أكثر من تلك التي فعلتها
        <br>- H. Jackson Brown`

        , `الجنون يفعل الشيء نفسه مرارًا وتكرارًا ، لكن توقع نتائج مختلفة
        <br>- Narcotics`
    ]

function addquotes() {
    var randomQuote =  quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
    console.log("done")
}