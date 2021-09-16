alert('Selamat datang di game tabak angka.\nperaturanya anda harus memasukan nilai 1-3\nplayer 1 dan 2  dilarang memasukan nilai yang sama\ndan akan diulang hingga 5 ronde')
let ronde = 0;



const game = () => {
    var p1 = 0;
    var p2 = 0;
    for (let i = 1; i <= 5; i++) {
        ronde++;
        angkaRandom = Math.floor(Math.random() * 3) + 1;
        confirm('ronde ' + ronde);
        let player1 = prompt('masukan nilai player 1');
        let player2 = prompt('masukan nilai player 2 ');


        if (player1 == player2) {
            alert('nilai dilarang sama');
        } else if (player1 <= 0 || player2 <= 0, player1 >= 4 || player2 >= 4) {
            alert('angka harus 1-3\\');
        } else if (player1 == angkaRandom) {
            p1 += 1;
            alert('Player 1 Menang');
        } else if (player2 == angkaRandom) {
            p2 += 1;
            alert('Player 2 Menang');
        } else {
            alert('semua salah');
        }



    }
    if (p1 > p2) {
        confirm('Player 1 Menang dengan poin\nplayer 1 = ' + p1 + '\nplayer 2 = ' + p2);
    } else if (p2 > p1) {
        confirm('Player 2 Menang dengan poin\nplayer 2 = ' + p2 + '\nplayer 1 = ' + p1);
    } else if (p1 == p2) {
        alert('permainan seri dengan poin\nplayer 1 = ' + p1 + '\nplayer 2 = ' + p2);
    }

};

game();