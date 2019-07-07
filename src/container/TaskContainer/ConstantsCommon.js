 // PERSONNEL Table
 export const PERSONNEL_TABLE_STRING =[ "STT","TÊN","NGÀY SINH","ĐỊA CHỈ","CẤP ĐỘ","THAO TÁC"];
 export const PERSONNEL_TITLE_STRING = "QUẢN LÝ NHÂN SỰ";
 //Modal
//From delete Personnel 
 export const PERSONNEL_MODAL_DELETE_TITLE ="XÁC NHẬN XÓA NHÂN SỰ";
//From add Personnel 
export const PERSONNEL_MODAL_CREATE  =["Tên nhân sự", "Ngày sinh","Đội(Nhóm)","-","Cấp độ","-","Tốt nghiệp trường","email","Địa chỉ"];
export const PERSONNEL_MODAL_CREATE_TYPE  =["text","date","option","hidden","option","hidden","text","text","text","hidden"];
export const PERSONNEL_MODAL_CREATE_LAYOUT =["col-md-3"," col-md-2 "," col-md-4 "," col-md-2 ", "col-md-3 ", "col-md-3","col-md-3","col-md-3","col-md-5","col-md-1"];
export const PERSONNEL_MODAL_CREATE_TITLE ="THÊM NHÂN SỰ";
//Form edit personnel 
export const PERSONNEL_MODAL_EDIT  =["Tên nhân sự", "Ngày sinh","Ngày vào làm","Số điện thoại","CMND","Địa chỉ"];
export const PERSONNEL_MODAL_EDIT_TYPE  =["text","date","date","numbe","number","text"];
export const PERSONNEL_MODAL_EDIT_LAYOUT =["col-md-4"," col-md-2 "," col-md-2 "," col-md-2 ", "col-md-3 ", "col-md-3"];
export const PERSONNEL_MODAL_EDIT_TITLE ="SỬA NHÂN SỰ";

export const PERSONNEL_TABLE_PROTOTYPE = [ "id", "name", "birth", "address", "level" ]

//Table Task
export const TASK_TABLE_STRING =[ "STT","TÊN ","MÔ TẢ CHI TIẾT CÔNG VIỆC","TRẠNG THÁI","MỨC ĐỘ","NGƯỜI GIAO VIỆC","NGƯỜI NHẬN VIỆC","NGÀY GIAO VIỆC","THAO TÁC"];
export const TASK_TITLE_STRING = "DANH SÁCH CÔNG VIỆC";
export const TASK_TABLE_PROTOTYPE = [ "id", "name", "descriptions", "status", "level", "date_start" ]