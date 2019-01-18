import jobs from './testData.json';
import qs from 'qs';

const realFetch = window.fetch;
window.fetch = (url, opts) => {
    return new Promise((resolve, reject) => {
        if (url.startsWith('/jobs')) {
            const rawQuery = url.split('?')[1];
            const query = qs.parse(rawQuery);
            const { page = 1, pageSize = 30 } = query;

            const pagedJobs = jobs.slice((page - 1) * pageSize, page * pageSize);
            setTimeout(
                () =>
                    resolve({
                        ok: true,
                        json: () => ({
                            total: jobs.length,
                            pages: Math.ceil(jobs.length / pageSize),
                            items: pagedJobs,
                        }),
                    }),
                Math.random() * 700 + 300
            );
        } else {
            resolve(realFetch(url, opts));
        }
    });
};
