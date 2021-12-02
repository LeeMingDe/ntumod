import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
// import Disqus from "disqus-react";

import '../styles/modules/module-details-page.scss';

import { Module } from '../interfaces/modules';
import ModuleInformationCard from './ModuleInformationCard';
import ModuleDetailsNavTab from './ModuleDetailsNavTab';
import ModuleDetailsRequisites from './ModuleDetailsRequisites';
import Loader from '../layout/Loader';
import ModuleDetailsTimetable from './ModuleDetailsTimetable';

const ModuleDetailsPage = () => {
    const [moduleInformation, setModuleInformation] = useState<Module>();
    const { moduleCode, moduleName } = useParams();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/modules/${moduleCode}/${moduleName}`)
            .then(res => {
                setModuleInformation(res.data);
                setIsLoading(false)
            })
            .catch(err => {
                alert(err.response.data.message)
            });
        }
        fetchData()
    }, [moduleCode, moduleName])

    useEffect(() => {
        return () => {
          // && history.location.pathname === "any specific path")
          if (history.action === "POP") {
            history.go(-1);
          }
        };
      }, [history])
    
    return (
        <React.Fragment>
            { isLoading 
                ? <Loader />
                : <div className="module-details-container">
                    <div>
                        <section id="details">
                            {moduleInformation == null ? null :
                                <ModuleInformationCard
                                    moduleCode={moduleInformation?.moduleCode}
                                    moduleName={moduleInformation?.moduleName}
                                    programme={moduleInformation?.programme}
                                    faculty={moduleInformation?.faculty}
                                    au={moduleInformation?.au}
                                    category={moduleInformation?.category}
                                    description={moduleInformation?.description}
                                    prerequisite={moduleInformation?.prerequisite}
                                    preclusion={moduleInformation?.preclusion}
                                    notAvailableFor={moduleInformation?.notAvailableFor}
                                    // semesters={moduleInformation?.semesters}
                                    isPassFail={moduleInformation?.isPassFail}
                                    exam={moduleInformation?.exam}
                                    workload={moduleInformation?.workload}
                                    detailedView = {true}
                                    isMinor={moduleInformation?.isMinor}
                                />
                            }
                        </section>
                        <section id="prerequisites" className="mt-3">
                            <div className="details-header">
                                Prerequisites Links
                            </div>
                            <hr className="my-1"/>
                            <ModuleDetailsRequisites
                                moduleName={moduleName}
                                moduleCode={moduleCode}
                                prerequisite={moduleInformation?.prerequisite}
                                prerequisiteFor={moduleInformation?.prerequisiteFor}
                            />
                        </section>
                        <section id="timetable" className="my-3">
                            <div className="details-header">
                                Timetable
                            </div>
                            <hr className="my-1"/>
                            <ModuleDetailsTimetable
                                timetable={moduleInformation.timetable}
                                hasSaturday={moduleInformation.hasSaturday}
                                isExtendedTiming={moduleInformation.isExtendedTiming}
                            />
                        </section>
                        {/* <section id="reviews" className=" py-5 my-5">
                            <div className="details-header">
                                Reviews
                            </div>
                            <hr className="my-1"/>
                        </section> */}
                    </div>
                    <div>
                        <ModuleDetailsNavTab />
                    </div>
                </div>
            }
        </React.Fragment>
    );
};

export default ModuleDetailsPage;