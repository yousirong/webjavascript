# Report 3

## Due Date 5월 23일(일)

1. sort/FiveCardsTestMain.js 수정
2. FiveCards 를 reorder 후 사전식 순서로 sort
3. [0]번 카드만 비교 --> [0]번이 같으면 [1] 비교, [1]도 같으면 [2] 비교...

```
1 [SP-2 , DI-6 , HE-8 , DI-9 , DI-J ]
2 [DI-2 , HE-4 , DI-8 , HE-10, DI-A ]
3 [CL-2 , CL-3 , SP-10, SP-A , CL-A ]
4 [HE-2 , CL-4 , CL-6 , SP-9 , SP-Q ]
이 결과가 아니고

1 [CL-2 , CL-3 , SP-10, SP-A , CL-A ]  => [3, 4, 14, 17, 클러버 에이스]
2 [HE-2 , CL-4 , CL-6 , SP-9 , SP-Q ]  => [5, 5, 7, 13, 16]
3 [DI-2 , HE-4 , DI-8 , HE-10, DI-A ]  => [4, 7, 10, 13, 다이아 에이스]
4 [SP-2 , DI-6 , HE-8 , DI-9 , DI-J ]  => [6, 8, 11, 11, 13]
위와 같은 결과로 나옴.
```

4. reorder는 자동으로 일어남.

### 제출 -- eclass에 자신의 report-3 folder를 zip 해서 올림

### 다른 부가 리포트 필요 없음
