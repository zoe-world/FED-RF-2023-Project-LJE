//Animax 컨텍스트 API 설정

import { createContext} from 'react';

export const ItemContext = createContext(
    {
        item: {
            // 이미지 src, 제목, 에피소드 txt
            top:'',
            left:'',
            img:'',
            tit:'',
            txt:'',
            ele :ele,
            eleW :eleW,
        }
    }
);

