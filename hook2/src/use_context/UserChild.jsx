import UserGarndChild from "./UserGrandChild";

const UserChild = () => {
    return(
        <div>
            <h2>UserChild 컴포넌트입니다</h2>
            <p>user데이터를 전달하지 않음</p>
            <UserGarndChild />
        </div>
    )
}

export default UserChild;