## Accordion

React.Fragment 등록 해서 border 겹치는 부분 없애기

onClick={() => onTitleClick(index)} , () 안적을경우 일괄 자동 실행됨 

### 방법 1

useEffect(() => {
    const search = async () => {
        await axios.get('aaaa');
    }
    search();
}, [term]);


### 방법 2

useEffect(() => {
    (async () => {
        await axios.get('aaaa');
    })();        
}, [term]);


### 방법 3

useEffect(() => {
    axios.get('aaaa')
    .then((response) => {
        console.log(response.data);
    });
}, [term]);



### 내용중 html 태그 제거
<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>