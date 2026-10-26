import { createContext } from "react";
import UserChild from "./UserChild";

//props 전달방식이 아닌 컨텍스트 전역관리 방식을 사용
//UserContext() 생성
export const UserContext = createContext({});

const UserParent = () => {
    const user = {
        name: "오상식",
        age: 45
    }

    return(
        <div>
            <h2>UserParent 컴포넌트</h2>
            <UserContext.Provider value={user}>
                <UserChild />
            </UserContext.Provider>
            
        </div>
    )
}

export default UserParent;