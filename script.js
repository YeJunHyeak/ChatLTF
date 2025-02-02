document.getElementById('search-btn').addEventListener('click', () => {
    document.getElementById('search-popup').style.display = 'block';
});

document.getElementById('close-popup-btn').addEventListener('click', () => {
    document.getElementById('search-popup').style.display = 'none';
});

document.getElementById('send-btn').addEventListener('click', () => {
    const message = document.getElementById('message-input').value.trim();
    if (message) {
        const chatBox = document.getElementById('chat-box');
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        document.getElementById('message-input').value = '';
    }
});" id="search-input" placeholder="검색어를 입력하세요">
        <button id="search-confirm-btn">검색</button>
        <button id="close-popup-btn">닫기</button>
    </div>
    <script src="script.js"></script>
</body>
</html>            height: 90vh;
        }
        .chat-box {
            flex: 1;
            overflow-y: auto;
            padding: 10px;
            background-color: white;
        }
        .input-container {
            display: flex;
            padding: 10px;
            background-color: white;
            border-top: 1px solid #ddd;
        }
        .input-container input {
            flex: 1;
            padding: 10px;
            margin-right: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .input-container button {
            padding: 10px 20px;
            background-color: #00796B;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            z-index: 1000;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Chat LFT</h1>
        <button id="search-btn">🔍</button>
    </div>
    <div class="chat-container">
        <div class="chat-box" id="chat-box"></div>
        <div class="input-container">
            <input type="text" id="message-input" placeholder="메시지를 입력하세요...">
            <button id="send-btn">전송</button>
        </div>
    </div>
    <div class="popup" id="search-popup">
        <h2>대화 검색</h2>
        <input type="text" id="search-input" placeholder="검색어를 입력하세요">
        <button id="search-confirm-btn">검색</button>
        <button id="close-popup-btn">닫기</button>
    </div>
    <script>
        document.getElementById('search-btn').addEventListener('click', () => {
            document.getElementById('search-popup').style.display = 'block';
        });

        document.getElementById('close-popup-btn').addEventListener('click', () => {
            document.getElementById('search-popup').style.display = 'none';
        });

        document.getElementById('send-btn').addEventListener('click', () => {
            const message = document.getElementById('message-input').value.trim();
            if (message) {
                const chatBox = document.getElementById('chat-box');
                const messageDiv = document.createElement('div');
                messageDiv.textContent = message;
                chatBox.appendChild(messageDiv);
                document.getElementById('message-input').value = '';
            }
        });
    </script>
</body>
</html>PROJECT_ID-default-rtdb.firebaseio.com",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_PROJECT_ID.appspot.com",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };
        firebase.initializeApp(firebaseConfig);
        const db = firebase.database();

        const chatBox = document.getElementById('chat-box');
        const messageInput = document.getElementById('message-input');
        const sendButton = document.getElementById('send-button');
        const searchPopup = document.getElementById('search-popup');
        const searchIcon = document.getElementById('search-icon');
        const closePopup = document.getElementById('close-popup');

        sendButton.addEventListener('click', () => {
            const message = messageInput.value.trim();
            if (message) {
                const newMessageRef = db.ref('messages').push();
                newMessageRef.set({ text: message, timestamp: Date.now() });
                messageInput.value = '';
            }
        });

        searchIcon.addEventListener('click', () => {
            searchPopup.style.display = 'block';
        });

        closePopup.addEventListener('click', () => {
            searchPopup.style.display = 'none';
        });

        db.ref('messages').on('child_added', (snapshot) => {
            const messageData = snapshot.val();
            const messageElement = document.createElement('div');
            messageElement.textContent = messageData.text;
            chatBox.appendChild(messageElement);
        });
    </script>
</body>
</html>Id('search-button').addEventListener('click', () => {
            const searchTerm = prompt("검색어를 입력하세요:");
            if (searchTerm) {
                db.ref("messages").once("value", (snapshot) => {
                    chatBox.innerHTML = '';
                    snapshot.forEach((child) => {
                        const msg = child.val();
                        if (msg.text.includes(searchTerm)) {
                            displayMessage(child.key, msg.username, msg.text, msg.timestamp);
                        }
                    });
                });
            }
        });
    </script>
</body>
</html>yle.display = 'none';
    }
  </script>

</body>
</html>und-color 0.3s;
    }
    .popup button:hover {
      background-color: #3700b3;
    }
    @media (max-width: 600px) {
      .header { font-size: 1.3em; }
      .username-container input, .username-container button,
      .input-container input, .input-container button,
      .header-right input, .header-right button { font-size: 14px; }
    }
  </style>
</head>
<body>
  <!-- 헤더: 앱명과 검색 아이콘 (닉네임 설정 후에만 보임) -->
  <div class="header">
    <div class="header-left">
      <span class="app-name">Chat LFT</span>
    </div>
    <div class="header-right" id="header-right">
      <button id="open-search-button">검색</button>
    </div>
  </div>

  <!-- 검색 팝업 -->
  <div class="search-popup" id="search-popup">
    <input type="text" id="search-popup-input" placeholder="대화 검색, 날짜/시간 입력..." />
    <div>
      <button id="search-popup-button">검색</button>
      <button id="close-search-button">닫기</button>
    </div>
  </div>

  <!-- 사용자 이름 설정 화면 -->
  <div class="username-container" id="username-container">
    <input type="text" id="username-input" placeholder="사용자 이름을 입력하세요..." />
    <button id="set-username-button">설정</button>
  </div>

  <!-- 채팅 컨테이너 (닉네임 설정 후 표시) -->
  <div class="chat-container" id="chat-container" style="display: none;">
    <div class="chat-box" id="chat-box"></div>
  </div>

  <!-- 하단 고정 입력창 -->
  <div class="input-container" id="input-container" style="display: none;">
    <input type="text" id="message-input" placeholder="메시지를 입력하세요..." />
    <button id="send-button">전송</button>
  </div>

  <!-- 수정/삭제 팝업 -->
  <div class="popup" id="popup">
    <p>메시지 관리</p>
    <button id="edit-message-button">수정</button>
    <button id="delete-message-button">삭제</button>
    <button id="close-popup-button">닫기</button>
  </div>

  <script>
    // 요소 참조
    const usernameInput = document.getElementById('username-input');
    const setUsernameButton = document.getElementById('set-username-button');
    const usernameContainer = document.getElementById('username-container');
    const chatContainer = document.getElementById('chat-container');
    const chatBox = document.getElementById('chat-box');
    const inputContainer = document.getElementById('input-container');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const popup = document.getElementById('popup');
    const editButton = document.getElementById('edit-message-button');
    const deleteButton = document.getElementById('delete-message-button');
    const closePopupButton = document.getElementById('close-popup-button');
    const openSearchButton = document.getElementById('open-search-button');
    const searchPopup = document.getElementById('search-popup');
    const searchPopupInput = document.getElementById('search-popup-input');
    const searchPopupButton = document.getElementById('search-popup-button');
    const closeSearchButton = document.getElementById('close-search-button');
    const headerRight = document.getElementById('header-right');

    // 상태 변수
    let username = localStorage.getItem('username') || '';
    const userId = localStorage.getItem('userId') || generateUserId();
    let selectedMessage = null;

    function generateUserId() {
      const id = 'user-' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', id);
      return id;
    }

    // 초기: 닉네임이 없으면 헤더 우측 검색 아이콘 숨김
    if (!username) {
      headerRight.style.display = 'none';
    } else {
      headerRight.style.display = 'flex';
    }

    // 닉네임 설정
    setUsernameButton.addEventListener('click', () => {
      const inputName = usernameInput.value.trim();
      if (inputName) {
        if (confirm("닉네임을 '" + inputName + "'로 설정합니다. 변경할 수 없습니다.")) {
          username = inputName;
          localStorage.setItem('username', username);
          usernameContainer.style.display = 'none';
          chatContainer.style.display = 'flex';
          inputContainer.style.display = 'flex';
          headerRight.style.display = 'flex'; // 닉네임 설정 후 검색 아이콘 보이기
          loadMessages();
        }
      }
    });

    // 메시지 저장 및 표시
    function saveMessage(text, type, username, userId) {
      const messages = JSON.parse(localStorage.getItem('messages')) || [];
      const id = 'msg-' + Math.random().toString(36).substr(2, 9);
      const time = Date.now();
      const message = { text, type, username, userId, id, time };
      messages.push(message);
      localStorage.setItem('messages', JSON.stringify(messages));
      displayMessage(message);
    }

    // 메시지 불러오기
    function loadMessages() {
      chatBox.innerHTML = '';
      const messages = JSON.parse(localStorage.getItem('messages')) || [];
      messages.forEach(msg => displayMessage(msg));
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    // 메시지 표시
    function displayMessage(msg) {
      const p = document.createElement('p');
      p.textContent = `${msg.username}: ${msg.text}`;
      p.classList.add(msg.type);
      p.dataset.id = msg.id;
      p.dataset.time = msg.time;
      p.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        if (msg.userId === userId) {
          selectedMessage = msg;
          popup.style.display = 'block';
        }
      });
      chatBox.appendChild(p);
    }

    // 전송 이벤트
    sendButton.addEventListener('click', () => {
      const text = messageInput.value.trim();
      if (text && username) {
        saveMessage(text, 'sent', username, userId);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    });
    messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendButton.click();
    });

    // 삭제 이벤트
    deleteButton.addEventListener('click', () => {
      const messages = JSON.parse(localStorage.getItem('messages')) || [];
      messages.forEach(msg => {
        if (msg.id === selectedMessage.id) {
          msg.text = "삭제된 메시지입니다.";
          msg.type = 'deleted';
        }
      });
      localStorage.setItem('messages', JSON.stringify(messages));
      loadMessages();
      closePopup();
    });

    // 수정 이벤트
    editButton.addEventListener('click', () => {
      if (Date.now() - selectedMessage.time > 60000) {
        alert("메시지는 1분 내에만 수정할 수 있습니다.");
        closePopup();
        return;
      }
      const newText = prompt("메시지를 수정하세요:", selectedMessage.text);
      if (newText) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.forEach(msg => {
          if (msg.id === selectedMessage.id) {
            msg.text = newText;
          }
        });
        localStorage.setItem('messages', JSON.stringify(messages));
        loadMessages();
      }
      closePopup();
    });

    // 팝업 닫기
    function closePopup() {
      popup.style.display = 'none';
    }

    // 검색 팝업 열기
    openSearchButton.addEventListener('click', () => {
      searchPopup.style.display = 'block';
      searchPopupInput.value = "";
      searchPopupInput.focus();
    });

    // 검색 이벤트: 메시지 필터링
    searchPopupButton.addEventListener('click', () => {
      const query = searchPopupInput.value.trim().toLowerCase();
      const allMessages = JSON.parse(localStorage.getItem('messages')) || [];
      if (!query) {
        loadMessages();
        searchPopup.style.display = 'none';
        return;
      }
      const filtered = allMessages.filter(msg => 
        msg.text.toLowerCase().includes(query) || msg.username.toLowerCase().includes(query)
      );
      chatBox.innerHTML = "";
      if (filtered.length === 0) {
        alert("검색 결과가 없습니다.");
      } else {
        filtered.forEach(msg => displayMessage(msg));
      }
      chatBox.scrollTop = chatBox.scrollHeight;
      searchPopup.style.display = 'none';
    });

    // 검색 팝업 닫기
    closeSearchButton.addEventListener('click', () => {
      searchPopup.style.display = 'none';
      loadMessages();
    });

    // 초기 메시지 불러오기
    loadMessages();
  </script>
</body>
</html>
