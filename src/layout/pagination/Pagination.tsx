import React, { useCallback, useEffect, useState } from 'react';

interface Props {
    
}

const DUMMY_DATA = [
    {
        title: "CS6969 Digital connections and physical needs",
        course: "com sci",
        numCredits: "3AUS",
        category: ["core", "broadening and deepening/get-pe(sts)", "broadening and deepening/ue"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,`,
        prereq: "CS6901",
        availableFor: "CS Year 2, CS Year 3",
        availableIn: ["Sem 1", "Sem 2", "ST 1", "ST 2"],
        exam: "27-Nov-2021 1:00PM 2 hrs",
        workload: {
            tut: 2,
            lect: 2,
            lab: 2
        }
    },
    {
        title: "CS6969 Digital connections and physical needs",
        course: "com sci",
        numCredits: "3AUS",
        category: ["core", "broadening and deepening/get-pe(sts)", "broadening and deepening/ue"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,`,
        prereq: "CS6901",
        availableFor: "CS Year 2, CS Year 3",
        availableIn: ["Sem 1", "Sem 2", "ST 1", "ST 2"],
        exam: "27-Nov-2021 1:00PM 2 hrs",
        workload: {
            tut: 2,
            lect: 2,
            lab: 2
        }
    }
]

const Pagination: React.FC<Props> = () => {
    const [data, setData] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage, setItemsPerPage] = useState();
    // const [currentItems, setCurrentItems] = useState([]);
    
    // const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    // const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         await axios.get(`${process.env.REACT_APP_BACKEND_URL}/search/${props.searchParams}`)
    //         .then(res => {
    //             setData(res.data);
    //         })
    //         .catch(err => {
    //             alert(err.response.data.message)
    //         });
    //     }
    //     fetchData()
    //     if (props.searchParams) {
    //         setData(prevNotes => prevNotes.filter(
    //                 note => note.title.includes(props.searchParams) 
    //                     || note.course === props.searchParams
    //                     || note.institution === props.searchParams));           
    //     } else if (props.courseId) {
    //         setData(prevNotes => prevNotes.filter(notes => notes.course.toLowerCase() === props.courseId.toLowerCase()));
    //     } else if (props.institution) {
    //         setData(prevNotes => prevNotes.filter(notes => notes.institution.toLowerCase() === props.institution.toLowerCase()));
    //     } else if (props.creator) {
    //         setData(prevNotes => prevNotes.filter(notes => notes.creator.toLowerCase() === props.creator.toLowerCase()));
    //     }
    //     setItemsPerPage(5);
    // }, [props.searchParams, props.courseId, props.institution, props.creator]);

    // // useEffect(() => {

    // // }, [props.noteUid]);
    
    // useEffect(() => {
    //     switch(props.sortSelected) {
    //         case sortRequirement[0]:
    //             //TODO: define what is popularity and how to sort it
    //             break;
    //         case sortRequirement[1]:
    //             setData(prevData => prevData.sort((currentNote, nextNote) => nextNote.views - currentNote.views));
    //             break;
    //         case sortRequirement[2]:
    //             setData(prevData => prevData.sort((currentNote, nextNote) => Date.parse(new Date(nextNote.uploadDate)) - Date.parse(new Date(currentNote.uploadDate))));
    //             break;
    //         default:
    //             break;
    //     }
    //     const indexOfLastItem = currentPage * itemsPerPage;
    //     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    //     setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
    // }, [props, data, currentPage, itemsPerPage])

    // const pages = [];

    // for (let i = 1; i <= Math.ceil(data.length/itemsPerPage); i++) {
    //     pages.push(i);
    // }

    // const pageClickHandler = (event) => {
    //     setCurrentPage(Number(event.target.id));
    // };

    // const firstPageClickHandler = () => {
    //     setCurrentPage(() =>  {
    //         setMaxPageNumberLimit(5);
    //         setMinPageNumberLimit(0);
    //         return 1;
    //     });
    // };

    // const lastPageClickHandler = () => {
    //     setCurrentPage(() =>  {
    //         setMaxPageNumberLimit(pages[pages.length - 1]);
    //         setMinPageNumberLimit(pages[pages.length - 1] - 5);
    //         return pages[pages.length - 1];
    //     });
    // };

    // const nextPageClickHandler = () => {
    //     setCurrentPage(prevPageNumber => {               
    //         if (prevPageNumber === pages[pages.length - 1]) {
    //             return prevPageNumber;
    //         }
    //         if (prevPageNumber + 1 > maxPageNumberLimit) {
    //             setMaxPageNumberLimit(maxPageNumberLimit + 5);
    //             setMinPageNumberLimit(minPageNumberLimit + 5);
    //         }
    //         return prevPageNumber + 1
    //     });
    // };

    // const prevPageClickHandler = () => {
    //     setCurrentPage(prevPageNumber => {
    //         if (prevPageNumber === pages[0]) {
    //             return prevPageNumber;
    //         }
    //         if (prevPageNumber - 1 <= minPageNumberLimit) {
    //             setMaxPageNumberLimit(maxPageNumberLimit - 5);
    //             setMinPageNumberLimit(minPageNumberLimit - 5);
    //         }
    //         return prevPageNumber - 1
    //     });
    // };

    // const renderPageNumbers = pages.map(number => {
    //     if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
    //         return (
    //             <Pagination.Item
    //                 key={number}
    //                 id={number}
    //                 onClick={pageClickHandler}
    //                 className={currentPage === number ? "active" : null}>
    //                     {number}
    //             </Pagination.Item >
    //         );
    //     } else {
    //         return null;
    //     }
    // })

    // const renderData = useCallback(() => {
    //     return (
    //         <ul className="p-0">
    //             {currentItems.map((searchResults, index) => {
    //                 return (
    //                     <SearchResultItem
    //                         key={index}
    //                         noteUid={searchResults.note_uid}
    //                         title={searchResults.title}
    //                         description={searchResults.description}
    //                     />
    //                 );
    //             })}
    //         </ul>
    //     )
    // }, [currentItems]);

    return (
        <React.Fragment>
            {/* {renderData()}
            <Pagination className="justify-content-center">
                <Pagination.First
                    onClick={firstPageClickHandler}
                    disabled={currentPage === pages[0]}
                />
                <Pagination.Prev
                    onClick={prevPageClickHandler}
                    disabled={currentPage === pages[0]}
                />
                {renderPageNumbers}
                <Pagination.Next
                    onClick={nextPageClickHandler}
                    disabled={currentPage === pages[pages.length - 1]}
                />
                <Pagination.Last
                    onClick={lastPageClickHandler}
                    disabled={currentPage === pages[pages.length - 1]}
                />
            </Pagination> */}
        </React.Fragment>
    );
}

export default Pagination;