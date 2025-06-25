#!/bin/bash

set -e

echo "📦 Bắt đầu quá trình build..."
npm run build

# Lưu branch hiện tại
CURRENT_BRANCH=$(git branch --show-current)

# Kiểm tra gh-pages đã tồn tại ở remote chưa
if ! git ls-remote --exit-code --heads origin gh-pages > /dev/null; then
  echo "🔧 Branch gh-pages chưa tồn tại. Đang tạo mới..."
  git checkout --orphan gh-pages
  git reset --hard
  git commit --allow-empty -m "Init gh-pages"
  git push origin gh-pages
  git checkout "$CURRENT_BRANCH"
else
  echo "✅ Branch gh-pages đã tồn tại."
fi

# Tạo worktree để deploy
echo "🚀 Đang deploy lên gh-pages..."
rm -rf gh-pages-temp
git worktree prune
git worktree add gh-pages-temp gh-pages

# Làm sạch và sao chép nội dung mới
rm -rf gh-pages-temp/*
cp -r dist/* gh-pages-temp/

# Commit & push
cd gh-pages-temp
git add .
git commit -m "Deploy to GitHub Pages" || echo "⚠️ Không có thay đổi để commit."
git push origin gh-pages
cd ..

# Cleanup
git worktree remove gh-pages-temp

echo "🎉 Deploy thành công lên GitHub Pages!"
