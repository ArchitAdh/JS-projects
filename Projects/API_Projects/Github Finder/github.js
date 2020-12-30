class Github {
  constructor() {
    this.client_id = "06df9ba0bf6b825b6005";
    this.client_secret = "16a7841b00f1974ec675c8995ce7cbd99b966729";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    //return object of profile and repo
    return {
      profile,
      repos,
    };
  }
}
