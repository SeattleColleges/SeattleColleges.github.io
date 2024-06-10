const StudentThumbnail = ({fileName, studentName}) =>{
    return (
        <img className="student-thumbnail" src={require('../images/students/'+fileName)} alt={"photo of "+studentName}/>
    )
}
export default StudentThumbnail