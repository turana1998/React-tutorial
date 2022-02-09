import axios from "axios";

class SDK {
    constructor() {
        this.movies = axios.create({
            baseURL: "https://api.themoviedb.org/4",
        })
        this.api_key = "285a107f0c92cfda467db221ccc502f7"
        this.account_id = "5f198024a6d931003787052f"
        this.access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzU5NzU4MzYsImF1ZCI6IjI4NWExMDdmMGM5MmNmZGE0NjdkYjIyMWNjYzUwMmY3IiwianRpIjoiMzY4NzEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI1ZjE5ODAyNGE2ZDkzMTAwMzc4NzA1MmYifQ.ZP8HlEcAthUMlIThvRa-keAxFBkIZ24fL1p_jiFWk_U"
    }

    // All lists
    async getLists() {
        try {
            const req = await this.movies.get(`/account/${this.account_id}/lists`, {
                headers: {
                    'Authorization': `Bearer ${this.access_token}`,
                }
            })
            return req.data;
        } catch (error) {
            console.log(error)
        }
    }

    // All Movies
    async getMovies(list_id) {
        try {
            const req = await this.movies.get(`/list/${list_id}?api_key=${this.api_key}`, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                }
            })

            return req.data;
        } catch (error) {
            console.log(error)
        }
    }

    // Search Movies
    async SearchMovies(query, { abortSignal, page = 1 }) {
        try {
            const searchReq = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${this.api_key}&page=${page}&query=${query}`, { signal: abortSignal });
            const data = await searchReq.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Create List
    async CreateList(info) {
        try {
            const listReq = await this.movies.post("/list", info, {
                headers: {
                    'Authorization': `Bearer ${this.access_token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                },
            })
            if (!listReq.ok) {
                const message = 'Error with Status Code: ' + (await listReq).status;
                throw new Error(message);
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Add Movie
    async AddItems(list_id, info) {
        try {
            const res = await this.movies.post(`/list/${list_id}/items`, info, {
                headers: {
                    'Authorization': `Bearer ${this.access_token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }).then((response) => {
                console.log(response)
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Update List
    async UpdateList(list_id, info) {
        try {
            const res = await this.movies.put(`/list/${list_id}`, info, {
                headers: {
                    'Authorization': `Bearer ${this.access_token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            })
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }

    // Remove Movie
    async RemoveItems(list_id, info) {
        if (window.confirm("Are you sure")) {
            try {
                const res = await this.movies.delete(`/list/${list_id}/items`, {
                    data: info,
                    headers: {
                        'Authorization': `Bearer ${this.access_token}`,
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                })
                return res.data;
            } catch (error) {
                console.log(error)
            }
        }
    }

    // Movie Detail
    async MovieDetail(media_type, movie_id) {
        try {
            const detReq = await fetch(`https://api.themoviedb.org/3/${media_type}/${movie_id}?api_key=${this.api_key}&language=en-US`);
            const data = await detReq.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    // Main Slider Movie
    async HomeMovies(list_id) {
        try {
            const req = await this.movies.get(`/list/${list_id}?api_key=${this.api_key}`, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            })
            return req.data;
        } catch (error) {
            console.log(error)
        }
    }

}

export default SDK;