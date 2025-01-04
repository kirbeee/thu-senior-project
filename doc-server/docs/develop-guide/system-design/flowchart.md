---
    sidebar_position: 1
---
```mermaid
    flowchart TD
    A["開始"] --> B["登入系統"]
    B -- 成功 --> C["課程查詢"]
    B -- 失敗 --> D["提示錯誤"]
    D --> B
    C --> n3["系級查詢"]
    E["選擇選課分類"] --> F["主修課程篩選"] & G["必修課程篩選"] & H["通識課程篩選"]
    F --> I["查看課程清單"]
    G --> I
    H --> I
    I <--> K["討論區論壇"]
    K <--> L["瀏覽貼文"] & M["發表新帖"]
    L --> n1["貼文"]
    M --> n1
    O["時間衝突檢查"] -- 有衝突 --> Q["提示錯誤"]
    T["確認選課"] --> V["提交選課"]
    AA["顯示預選課表"] --> AB["結束"]
    n3 --> E
    O --> U["加入暫存清單"]
    U --> T & n5["繼續選課"]
    V --> AA
    n4{"送出要求提交到暫存清單"} --> O
    Q --> I
    I --> n4
    n5 --> I

    %% 定义颜色样式
    classDef blueNode fill:#2962FF,stroke:#2962FF,color:#ffffff;
    classDef redNode fill:#D50000,stroke:#D50000,color:#ffffff;
    classDef greenNode fill:#00C853,stroke:#00C853,color:#ffffff;
    classDef purpleNode fill:#AA00FF,stroke:#AA00FF,color:#ffffff;
    classDef yellowNode fill:#FFD600,stroke:#FFD600,color:#000000;
    classDef orangeNode fill:#FF6D00,stroke:#FF6D00,color:#ffffff;
    classDef pinkNode fill:#E1BEE7,stroke:#E1BEE7,color:#000000;

    %% 应用颜色样式
    class B,C,D blueNode;
    class n3,E,F,G,H redNode;
    class I,O,n4 greenNode;
    class K,L,M,n1 purpleNode;
    class T,V,U,n5 yellowNode;
    class Q pinkNode;
    class AA orangeNode;

    %% 三角形形状用菱形代替
    classDef decisionNode fill:#FFD600,stroke:#FFD600,color:#000000,shape:diamond;

    %% 将菱形形状应用到相关节点
    class L,M,Q,V decisionNode;
