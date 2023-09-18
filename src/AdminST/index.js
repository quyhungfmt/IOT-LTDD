function user () {
    let body = '<div>'
    body = `
    <div style="justify-content:center;display:flex;width:'100%'">
    <div class="boxbody">
        <div class="adminstt">
            <div class="addAccount">
                <p>Thêm Tài Khoản</p>
                <p>Email</p>
                <input type="email" placeholder="Nhap Email">
                <p>PassWord</p>
                <input type="password" placeholder="Nhap Mat khau">
                <p>PassWord</p>
                <input type="password" placeholder="Nhap Lai Mat Khau">
                <br>
                <button onclick="alert('user')">add</button>
                <button>Change</button>
            </div>
        </div>
        <div class="list-account">
            <div class="account">
                <ul style="display: flex;flex-direction: column;position: relative;">
                    <li >
                        <div style="display: flex;flex-direction: row;background-color: gray;">
                            <p>admin@gmail.com</p>
                            <p>admin@gmail.com</p>
                            <button>delete</button>
                        </div>
                    </li>
                    <li >
                        <div style="display: flex;flex-direction: row;background-color: gray;">
                            <p style="margin: 0 5px 0 5px;border:1px solid black;width: 100px;">admin@gmail.com</p>
                            <p style="margin: 0 5px 0 5px;">admin@gmail.com</p>
                            <button>delete</button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p style="">admin@gmail.com</p>
                            <p style="">admin@gmail.com</p>
                            <button>delete</button>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  </div>
    `
    body += '<div>'
    document.querySelector('#listbody').innerHTML=body
  }