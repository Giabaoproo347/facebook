
import './anh-bia.css'

function AnhBia(props) {

    const giaiTrai = function () {
        alert('pham gialong')
    };

    return (
        <div>
            <div className="noi-dung-anh-bia" >
                <img className="anh-bia" src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.18169-9/19554618_855838377897761_1121396217711799904_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=jsEN5aPMRi4AX-Uixu6&_nc_ht=scontent.fhan17-1.fna&oh=00_AT9BzC0eQEucbR1BEYJw5OCsi1EI8K8kbgU75QAA1stAOw&oe=631C506A"></img>
                <div className="tieu-de" onClick={giaiTrai}>
                    <img className='anh-camera' src='https://i.pinimg.com/originals/36/d9/44/36d944e4369dcf8b6ac4f722a2dd3449.png'></img>
                    Chỉnh sửa ảnh bìa</div>
            </div>

            <div className='avatar'>
                <div className='avatar-img'>
                    <img className='anh-avatar' src='https://scontent.fhan17-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1NgV3dwPxYgAX9Nq4iQ&_nc_ht=scontent.fhan17-1.fna&oh=00_AT86ma7ISe7lKqfK-Farq57w80ZaMufTcFmTGMUEaoHhEQ&oe=631D8678'></img>

                    <div className='bao-anh'>
                        <img className='anh-camera-avatar' src='https://i.pinimg.com/originals/36/d9/44/36d944e4369dcf8b6ac4f722a2dd3449.png'></img>
                    </div>
                </div>

                <div className='ten'>
                    <div className='ho-ten'>
                        Pham Gia Long
                    </div>

                    <div className='ban-be'>
                        667 bạn bè
                    </div>

                    <div className='anh-ban-be'>
                        <img className='anh anh1' src='https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/294636994_1701389896887165_32233440167890081_n.jpg?stp=cp0_dst-jpg_p64x64&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=vVW4lkcCXEEAX9kQUL2&_nc_ht=scontent.fhan17-1.fna&oh=00_AT8ssAq42kKuKzT5WUYeDHcNvNa8l6XaXfem7QcBbGcgNA&oe=62FCC95D'></img>
                        <img className='anh anh2' src='https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/242527153_1036527577156438_7901348079156380787_n.jpg?stp=c79.16.241.242a_cp0_dst-jpg_s64x64&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=VrQ1huujHGUAX_ZPBdE&_nc_ht=scontent.fhan17-1.fna&oh=00_AT9aoC2SFMO4IF7lyEXdwYhuTsEZzt7IbDM0PONUPu5xNw&oe=62FC152C'></img>
                        <img className='anh anh3' src='https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-1/41647174_237633450235005_8033852574752833536_n.jpg?stp=c7.0.64.64a_cp0_dst-jpg_p64x64&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=FxR9yQf7BOQAX_z0zZX&_nc_ht=scontent.fhan17-1.fna&oh=00_AT-ooyNRWaewdKZnEMJFPGwAGzPJ8GY0Bdci7WLcKr1NuA&oe=631B8BF2'></img>
                        <img className='anh anh4' src='https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/263263824_1015187379038327_954313514757258935_n.jpg?stp=cp0_dst-jpg_p64x64&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=FIUuuIneY20AX_d8lPA&_nc_oc=AQk6vpS6fu5qpVoJWlCRzp1F_FNkB9RxLBgmfAKM2MdzT48IeeWPzDL7fW_SYSa2iKo&_nc_ht=scontent.fhan17-1.fna&oh=00_AT94kc8GTQuw6VtRschBpREO-AVUGfwTRnF-mEGfeOitxA&oe=62FCA051'></img>
                        <img className='anh anh5' src='https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/292529350_982101872466168_7743160415380823378_n.jpg?stp=cp0_dst-jpg_p64x64&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=0ByHTnoHcXIAX8XqD2f&_nc_ht=scontent.fhan17-1.fna&oh=00_AT8UmcXU8VSWgpN--tj-d7OO9hqiAA-BaK4808-DGEFXuA&oe=62FC5438'></img>
                        <img className='anh anh6' src='https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-1/29339871_395121937627392_2786738286754791424_n.jpg?stp=cp0_dst-jpg_p64x64&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=hHkD_AsmEkcAX8J9mqM&_nc_ht=scontent.fhan17-1.fna&oh=00_AT-eiD8i1ULYqvjZOCjf9RxnbkaSQM-yC4izajuU953jCA&oe=631D3987'></img>

                    </div>
                </div>

                <div className='chinh-sua-trang-ca-nhan'>
                    <div className='tin'>
                        <img style={{height: '18px', marginRight: '5px'}} src=' https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/0mrcsDB7uS9.png'></img>
                        Thêm vào tin
                    </div>

                    <div className='chinh-sua'>
                        <img style={{height: '18px', marginRight: '5px'}} src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lYApul5-WxY.png'></img>
                        Chỉnh sửa
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnhBia;
