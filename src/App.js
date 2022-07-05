import React from "react";
import Layout from "./components/services/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
             <img src="https://avatars.githubusercontent.com/u/72894592?v=4" alt="Avatar of user"/>
             <h1>Renato Rocha</h1>
             <h3>Username: </h3>
             <span>Rocha</span>
        </div>
              <div>User</div>
              <div>Repositories</div>
              <div>Starreds</div>
      </Layout>
    </main>

  );
}

export default App;
