import React from 'react'

export default function FormText() {
  const textPswd = React.useRef()
  const textPswd2 = React.useRef()

  // เช็กยืนยันรหัสผ่านเมื่อออกจากช่องที่สอง
  const onBlurPassword2 = () => {
    if (textPswd2.current.value !== '' && textPswd2.current.value !== textPswd.current.value) {
      textPswd2.current.value = ''
      alert('รหัสผ่านทั้งสองช่องไม่ตรงกัน')
    }
  }

  // กด OK แล้วตรวจรูปแบบรหัสผ่าน (ต้องเป็น a-z A-Z 0-9 เท่านั้น)
  const onClickOk = (e) => {
    e.preventDefault()
    let pswd = textPswd.current.value
    if (pswd !== '' && !pswd.match(/^[0-9a-zA-Z]+$/)) {
      textPswd.current.value = ''
      alert('โปรดป้อนรหัสผ่านเป็นตัวเลขหรืออักษร a-z / A-Z เท่านั้น')
    }
  }

  return (
    <div className="container mt-4">
      <form>
        {/* password 1 */}
        <div className="form-group mb-3">
          <label htmlFor="pswd1">รหัสผ่าน</label>
          <input
            type="password"
            id="pswd1"
            className="form-control form-control-sm"
            ref={textPswd}
          />
        </div>

        {/* password 2 */}
        <div className="form-group mb-3">
          <label htmlFor="pswd2">ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            id="pswd2"
            className="form-control form-control-sm"
            ref={textPswd2}
            onBlur={onBlurPassword2}
          />
        </div>

        {/* memo */}
        <div className="form-group mb-4">
          <label htmlFor="memo">หมายเหตุ</label>
          <textarea
            id="memo"
            name="memo"
            rows="2"
            maxLength="200"
            className="form-control form-control-sm"
          />
        </div>

        <div className="text-center">
          <button className="btn btn-sm px-4 btn-primary" onClick={onClickOk}>
            OK
          </button>
        </div>
      </form>
    </div>
  )
}
