1. Install VueJS
2. VueInstance 
3. Data & Method 
4. Data binding
    - v-bind:href=
    - v-bind:target=
    - v-bind:class=
    - v-bind:style=
    - v-bind:key=
5. JavaScript Expression
6. Event Handling
    - v-on:click
    - v-on:mouseMove
    - v-on:submit
    - v-on:submit.prevent (Ngan chan) || event.preventDeaufaul()
    - event.target
    - v-on:mouseMove.stop || event.stopPropagation() (Dung su lan tu con ra cha)
    - v-on:keyup
7. Computed
8. Two-way Data Binding
    - v-model= 
9. Conditional Rendering (Bieu thuc dieu kien)
    - v-if=
    - v-else=
    - v-elst-if=
    - v-show=
    - key=
10. List Rendering
    - v-for=
11. Note about Array and Object
    - vueInstance.$set(target, key, value) 
    Ex: 
        - with Array: vueInstance.$set(vueInstance.arrNumber, 0, 2019)
        - with Object: vueInstance.$set(vueInstance.objScore, "englis", 9)
12. Raw HTML
    - v-html=
13. Structure in the Project
    - Environment
        + Development
            - Babel --> A JavaScript Compiler
            - Webpack --> Tool giup dong goi code, dong goi ma nguon
        + Production
14. Props 
    - Nhung data truyen tu Component cha vao Component con
    -> Cu phap giong thuoc tinh -> Rang buoc attribute -> Use v-bind: 
    - Props Down -> Truyen du lieu tu cha vao con --> Thang con chi used, khong duoc change truc tiep
15. Event
    - Event Up -> Truyen thong diep (Thong diep event) thong bao cho Component cha know it want change data -> Task of Component cha la nhan duoc thong diep va tien hanh change data -> Custom Event in VueJS
    - Custom Events
16. Reference
    - Tham chieu toi HTML elements
17. Slot
    - Cau truc HTML elements in Component tag

