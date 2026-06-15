let lgpdUrl = 'https://jsonplaceholder.typicode.com/posts';

let lgpdHtml = `
    <div class="lgpd">
        <div class="lgpd--left">
            Nós utilizamos cookies para melhorar a experiência do usuário.<br>
            Para conferir detalhadamente todos os cookies utilizados, leia nossa <a href="'">política de privacidade</a>
        </div>
        <!-- lgpd--left -->
        <div class="lgpd--right">
            <button>OK</button>
        </div>
        <!-- lgpd--right -->
    </div>
    <!-- lgpd -->
    <link rel="stylesheet" href="lgpd/lgpd.css">
`;

let isContent = localStorage.getItem('lgpd')

if (!isContent) {

    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdButton = lgpdArea.querySelector('button');

    lgpdButton.addEventListener('click', async () => {
        lgpdArea.remove();

        let result = await fetch(lgpdUrl);
        let json = await result.json();

        if (json.error != '') {
            localStorage.setItem('lgpd', json[0].id);

        }

    });

}