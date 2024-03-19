class Github{
  constructor(){
    this.client_id = '9731f3dd20e9b0e3edc0';
    this.client_secret = '3db75279a80d6695b61bbd7c0ebb6041121efa45';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const Repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repofinder = await Repos.json();
    return {
      profile,
      repofinder
    }
  }
}