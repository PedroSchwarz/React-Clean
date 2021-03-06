import React, { ReactNode, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pagesActions } from '../../stores/Pages';
import { PAGES_STATE } from '../../stores/Pages/reducer';
import { ArrowButton, Controller, PageIndicator } from './styles';

const PagesController: React.FC = () => {
    const dispatch = useDispatch();
    const { totalPages, currentPage } = useSelector<{pages: PAGES_STATE}, PAGES_STATE>(state => state.pages);
    const pages = Array.from(new Array(totalPages).keys()).map(el => el + 1);

    const handleRenderPageIndicators = useCallback((): ReactNode[] => {
        return pages
        .filter(el => el === currentPage - 1 || el === currentPage || el === currentPage + 1)
        .map(el => {
            return (
            <PageIndicator key={el} active={el === currentPage}>
                <p className="indicator">{el}</p>
            </PageIndicator>
            );
        });
    }, [currentPage]);
    
    const handlePreviousPage = useCallback(() => {
        if (currentPage === 1) return;
        else dispatch(pagesActions.previousPage());
    }, [currentPage]);

    const handleNextPage = useCallback(() => {
        if (currentPage === pages.length) return;
        else dispatch(pagesActions.nextPage());
    }, [currentPage]);

    return (
        <Controller>
            <ArrowButton type="button" onClick={handlePreviousPage} disabled={currentPage === 1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10.99" viewBox="0 0 7 10.99"><defs></defs><path className="a" d="M1769.007,729.494a.423.423,0,0,1,.128-.307l5.014-5.058a.422.422,0,0,1,.608,0l1.122,1.132a.431.431,0,0,1,0,.614l-3.588,3.62,3.588,3.62a.431.431,0,0,1,0,.614l-1.122,1.132a.422.422,0,0,1-.608,0l-5.014-5.059A.422.422,0,0,1,1769.007,729.494Z" transform="translate(-1769.007 -723.999)"/></svg>
            </ArrowButton>

            { handleRenderPageIndicators() }

            <ArrowButton type="button" onClick={handleNextPage} disabled={currentPage === pages.length}>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10.99" viewBox="0 0 7 10.99"><defs></defs><path className="a" d="M1848.993,729.5a.423.423,0,0,1-.128.307l-5.014,5.059a.421.421,0,0,1-.608,0l-1.121-1.132a.431.431,0,0,1,0-.613l3.588-3.62-3.588-3.62a.43.43,0,0,1,0-.613l1.121-1.132a.421.421,0,0,1,.608,0l5.014,5.059A.422.422,0,0,1,1848.993,729.5Z" transform="translate(-1841.993 -724.01)"/></svg>
            </ArrowButton>
        </Controller>
    );
}

export default memo(PagesController);