# Template Variables

Template variables are the heart of EPOML's dynamic content generation. They allow you to inject data into templates, making them reusable and adaptable for different contexts.

## Basic Variable Usage

Variables are enclosed in curly braces `{}` and are replaced with actual values during template parsing:

```jsx
const template = `<p>Hello, {name}!</p>`;
const variables = { name: "World" };
const result = await epomlparse(template, variables);
// Output: "Hello, World!"
```

## Variable Types

EPOML supports all JavaScript data types as template variables:

### Strings
```jsx
const template = `<Header level={1}>{title}</Header>`;
const variables = { title: "My Document" };
```

### Numbers
```jsx
const template = `<Header level={headerLevel}>Section {sectionNumber}</Header>`;
const variables = { headerLevel: 2, sectionNumber: 1 };
```

### Booleans
```jsx
const template = `<Code inline={isInline}>console.log("Hello");</Code>`;
const variables = { isInline: true };
```

### Objects
```jsx
const template = `
  <div>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>Role: {user.role}</p>
  </div>
`;
const variables = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    role: "admin"
  }
};
```

### Arrays
```jsx
const template = `
  <ul>
    {items.map(item => `<li>${item}</li>`).join('')}
  </ul>
`;
const variables = {
  items: ["Apple", "Banana", "Cherry"]
};
```

### Functions
```jsx
const template = `<p>Current time: {getCurrentTime()}</p>`;
const variables = {
  getCurrentTime: () => new Date().toISOString()
};
```

## Nested Object Properties

Access nested properties using dot notation:

```jsx
const template = `
  <div>
    <Header level={2}>{post.title}</Header>
    <p>By {post.author.name} on {post.publishDate}</p>
    <p>{post.content}</p>
    <p>Tags: {post.meta.tags.join(', ')}</p>
  </div>
`;

const variables = {
  post: {
    title: "Getting Started with EPOML",
    author: {
      name: "Jane Smith",
      email: "jane@example.com"
    },
    publishDate: "2024-01-15",
    content: "EPOML is a powerful template engine...",
    meta: {
      tags: ["tutorial", "epoml", "templates"],
      category: "documentation"
    }
  }
};
```

## Array Access and Iteration

### Direct Array Access
```jsx
const template = `
  <p>First item: {items[0]}</p>
  <p>Second item: {items[1]}</p>
  <p>Total items: {items.length}</p>
`;

const variables = {
  items: ["red", "green", "blue"]
};
```

### Array Methods
```jsx
const template = `
  <div>
    <p>All items: {items.join(', ')}</p>
    <p>Uppercase items: {items.map(item => item.toUpperCase()).join(', ')}</p>
    <p>Filtered items: {items.filter(item => item.length > 3).join(', ')}</p>
  </div>
`;

const variables = {
  items: ["cat", "dog", "elephant", "fish"]
};
```

## Complex Variable Examples

### Configuration Object
```jsx
const template = `
  <div>
    <Header level={1}>{config.app.name} Configuration</Header>
    
    <Header level={2}>Database Settings</Header>
    <ul>
      <li>Host: {config.database.host}</li>
      <li>Port: {config.database.port}</li>
      <li>Database: {config.database.name}</li>
    </ul>
    
    <Header level={2}>API Settings</Header>
    <ul>
      <li>Base URL: {config.api.baseUrl}</li>
      <li>Version: {config.api.version}</li>
      <li>Rate Limit: {config.api.rateLimit} requests/minute</li>
    </ul>
  </div>
`;

const variables = {
  config: {
    app: {
      name: "MyApp",
      version: "1.2.0"
    },
    database: {
      host: "localhost",
      port: 5432,
      name: "myapp_db"
    },
    api: {
      baseUrl: "https://api.myapp.com",
      version: "v1",
      rateLimit: 1000
    }
  }
};
```

### User Profile with Computed Values
```jsx
const template = `
  <div>
    <Header level={1}>{user.profile.firstName} {user.profile.lastName}</Header>
    
    <CaptionedParagraph caption="Personal Information">
      <Bold>Full Name:</Bold> {user.profile.firstName} {user.profile.lastName}<br/>
      <Bold>Email:</Bold> {user.profile.email}<br/>
      <Bold>Age:</Bold> {user.getAge()} years<br/>
      <Bold>Member Since:</Bold> {user.getMembershipDuration()}
    </CaptionedParagraph>
    
    <CaptionedParagraph caption="Account Status">
      <Bold>Status:</Bold> {user.account.isActive ? 'Active' : 'Inactive'}<br/>
      <Bold>Plan:</Bold> {user.account.plan}<br/>
      <Bold>Credits:</Bold> {user.account.credits} remaining
    </CaptionedParagraph>
  </div>
`;

const variables = {
  user: {
    profile: {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice@example.com",
      birthDate: "1990-05-15"
    },
    account: {
      isActive: true,
      plan: "Premium",
      credits: 150,
      createdAt: "2020-01-15"
    },
    getAge() {
      const birth = new Date(this.profile.birthDate);
      const today = new Date();
      return today.getFullYear() - birth.getFullYear();
    },
    getMembershipDuration() {
      const created = new Date(this.account.createdAt);
      const today = new Date();
      const years = today.getFullYear() - created.getFullYear();
      return `${years} years`;
    }
  }
};
```

## Conditional Variables

### Ternary Operators
```jsx
const template = `
  <div>
    <p>Status: {user.isOnline ? 'Online' : 'Offline'}</p>
    <p>Badge: {user.isPremium ? '⭐ Premium' : '👤 Regular'}</p>
    <p>Message: {user.hasMessages ? `You have ${user.messageCount} messages` : 'No new messages'}</p>
  </div>
`;

const variables = {
  user: {
    isOnline: true,
    isPremium: false,
    hasMessages: true,
    messageCount: 5
  }
};
```

### Logical Operators
```jsx
const template = `
  <div>
    <p>Welcome{user.name && `, ${user.name}`}!</p>
    <p>{user.isAdmin && 'You have admin privileges.'}</p>
    <p>{user.notifications || 'No notifications available.'}</p>
  </div>
`;

const variables = {
  user: {
    name: "Bob",
    isAdmin: true,
    notifications: null
  }
};
```

## Dynamic Component Props

Variables can be used in component props:

```jsx
const template = `
  <div>
    <Header level={doc.level} syntax={doc.format}>
      {doc.title}
    </Header>
    
    <Code 
      inline={code.isInline}
      lang={code.language}
      blankLine={code.addSpacing}
    >
      {code.content}
    </Code>
    
    <Audio 
      src={media.audioFile}
      position={media.position}
      alt={media.description}
    />
  </div>
`;

const variables = {
  doc: {
    level: 2,
    format: "markdown",
    title: "API Documentation"
  },
  code: {
    isInline: false,
    language: "javascript",
    addSpacing: true,
    content: "const api = new APIClient();"
  },
  media: {
    audioFile: "./intro.mp3",
    position: "top",
    description: "Introduction audio"
  }
};
```

## Variable Validation and Error Handling

### Checking for Undefined Variables
```jsx
const template = `
  <div>
    <p>Name: {user?.name || 'Anonymous'}</p>
    <p>Email: {user?.email || 'Not provided'}</p>
    <p>Role: {user?.role || 'Guest'}</p>
  </div>
`;

// Works even if user is undefined
const variables = {};
```

### Default Values
```jsx
const template = `
  <Header level={level || 1}>
    {title || 'Untitled Document'}
  </Header>
`;

const variables = {
  // level is undefined, will default to 1
  title: undefined // will default to 'Untitled Document'
};
```

### Type Checking
```jsx
const template = `
  <div>
    <p>Count: {typeof count === 'number' ? count : 'Invalid'}</p>
    <p>Items: {Array.isArray(items) ? items.join(', ') : 'No items'}</p>
  </div>
`;

const variables = {
  count: "not a number", // Will show 'Invalid'
  items: "not an array"   // Will show 'No items'
};
```

## Advanced Variable Patterns

### Variable Interpolation in Strings
```jsx
const template = `
  <div>
    <p>Welcome to {settings.siteName}!</p>
    <p>API Endpoint: {settings.protocol}://{settings.host}:{settings.port}/{settings.version}</p>
    <p>Full URL: {settings.getFullUrl()}</p>
  </div>
`;

const variables = {
  settings: {
    siteName: "My Website",
    protocol: "https",
    host: "api.mysite.com",
    port: 443,
    version: "v1",
    getFullUrl() {
      return `${this.protocol}://${this.host}:${this.port}/${this.version}`;
    }
  }
};
```

### Computed Properties
```jsx
const template = `
  <div>
    <Header level={2}>Order Summary</Header>
    <ul>
      <li>Subtotal: ${order.getSubtotal()}</li>
      <li>Tax ({order.taxRate * 100}%): ${order.getTax()}</li>
      <li>Shipping: ${order.shipping}</li>
      <li><Bold>Total: ${order.getTotal()}</Bold></li>
    </ul>
  </div>
`;

const variables = {
  order: {
    items: [
      { name: "Item 1", price: 29.99, quantity: 2 },
      { name: "Item 2", price: 15.50, quantity: 1 }
    ],
    taxRate: 0.08,
    shipping: 5.99,
    
    getSubtotal() {
      return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    getTax() {
      return this.getSubtotal() * this.taxRate;
    },
    
    getTotal() {
      return this.getSubtotal() + this.getTax() + this.shipping;
    }
  }
};
```

### Environment-based Variables
```jsx
const template = `
  <div>
    <Header level={1}>{env.appName} - {env.environment}</Header>
    
    {env.isDevelopment && (
      <Alert type="warning">
        Running in development mode
      </Alert>
    )}
    
    <ul>
      <li>Version: {env.version}</li>
      <li>Build: {env.buildNumber}</li>
      <li>Environment: {env.environment}</li>
      {env.isProduction && `<li>CDN: ${env.cdnUrl}</li>`}
    </ul>
  </div>
`;

const variables = {
  env: {
    appName: "MyApp",
    environment: process.env.NODE_ENV || "development",
    version: "1.2.3",
    buildNumber: "20240115.1",
    cdnUrl: "https://cdn.myapp.com",
    
    get isDevelopment() {
      return this.environment === "development";
    },
    
    get isProduction() {
      return this.environment === "production";
    }
  }
};
```

## Performance Considerations

### Lazy Evaluation
```jsx
const template = `
  <div>
    <p>Current time: {time.current}</p>
    <p>Formatted: {time.formatted}</p>
  </div>
`;

const variables = {
  time: {
    get current() {
      return Date.now(); // Only evaluated when accessed
    },
    
    get formatted() {
      return new Date().toLocaleString(); // Only evaluated when accessed
    }
  }
};
```

### Caching Expensive Operations
```jsx
const template = `
  <div>
    <p>Report generated: {report.data}</p>
    <p>Summary: {report.summary}</p>
  </div>
`;

const variables = {
  report: {
    _cache: {},
    
    get data() {
      if (!this._cache.data) {
        // Expensive operation only runs once
        this._cache.data = generateExpensiveReport();
      }
      return this._cache.data;
    },
    
    get summary() {
      if (!this._cache.summary) {
        this._cache.summary = this.data.summary;
      }
      return this._cache.summary;
    }
  }
};
```

## Best Practices

1. **Descriptive Names**: Use clear, descriptive variable names
   ```jsx
   // Good
   {user.firstName} {user.lastName}
   
   // Avoid
   {u.fn} {u.ln}
   ```

2. **Null Safety**: Always handle potential undefined values
   ```jsx
   {user?.profile?.avatar || '/default-avatar.png'}
   ```

3. **Type Consistency**: Keep variable types consistent
   ```jsx
   // Good: Always a string
   {status || 'unknown'}
   
   // Avoid: Mixed types
   {status || 0}
   ```

4. **Computed Properties**: Use getters for derived values
   ```jsx
   get fullName() {
     return `${this.firstName} ${this.lastName}`;
   }
   ```

5. **Default Values**: Provide sensible defaults
   ```jsx
   {config.theme || 'light'}
   {config.pageSize || 10}
   ```

6. **Documentation**: Document complex variable structures
   ```typescript
   interface UserVariables {
     user: {
       profile: {
         firstName: string;
         lastName: string;
         email: string;
       };
       settings: {
         theme: 'light' | 'dark';
         notifications: boolean;
       };
     };
   }
   ```

Template variables make EPOML templates powerful and reusable. By understanding these patterns and best practices, you can create dynamic, data-driven templates that adapt to different contexts and requirements.