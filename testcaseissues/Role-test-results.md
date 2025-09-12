# Role Component

## × should render basic role (12 ms)
**Input:**
```jsx
<Role name="Admin" />
```

**Expected:**
```
# ✅ Role: Admin
```

**Actual:**
```
ROLE: ✅ Admin
============
```

## × should render role with description (2 ms)
**Input:**
```jsx
<Role name="Admin" description="Administrator role" />
```

**Expected:**
```
**Description:** Administrator role
```

**Actual:**
```
ROLE: ✅ Admin
============
Description: Administrator role
```

## × should render role with responsibilities (3 ms)
**Input:**
```jsx
<Role name="Admin" responsibilities={["Manage users", "Configure system"]} />
```

**Expected:**
```
## Responsibilities
- Manage users
- Configure system
```

**Actual:**
```
ROLE: ✅ Admin
============
Responsibilities:
----------------
- Manage users
- Configure system
```

## × should render role with permissions (3 ms)
**Input:**
```jsx
<Role name="Admin" permissions={["read", "write", "delete"]} />
```

**Expected:**
```
## Permissions
- read
- write
- delete
```

**Actual:**
```
ROLE: ✅ Admin
============
Permissions:
-----------
- read
- write
- delete
```

## × should render inactive role (4 ms)
**Input:**
```jsx
<Role name="Admin" active={false} />
```

**Expected:**
```
# ❌ Role: Admin
```

**Actual:**
```
ROLE: ❌ Admin
============
```

## √ should render role with html syntax (1 ms)
