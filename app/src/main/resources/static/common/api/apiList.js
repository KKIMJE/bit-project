export const PATH = {
    PARTY: {
        partyList: '/party/list'
    }
};


/*******************
    날짜 포맷 변경
*******************/
export async function dateFormat(colon, date) {
    let OldDate = new Date(await date);
    let year = OldDate.getFullYear().toString();
    let month;

    if (OldDate.getMonth() + 1 < 10) {
        month = '0' + (OldDate.getMonth() + 1).toString();
    }

    let day;

    if (OldDate.getDate() < 10) {
        day = '0' + OldDate.getDate().toString();
    }

    let time = OldDate.getTime();
    let formatDate = year + colon + month + colon + day;

    return formatDate;
}


/*******************
    우리지금만나
*******************/

// 리스트
export async function partyList() {

}
