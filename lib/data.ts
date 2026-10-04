export type AppCategory = {
  id: string;
  title: string;
  slug: string;
  description: string;
  emoji: string;
};

export type PostItem = {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  createdAt: string;
  category: string;
  title: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  saves: number;
  image: string | null;
};

export const categories: AppCategory[] = [
  { id: '1', title: '고양이 자랑', slug: 'cat-show', description: '우리 집 고양이의 귀여운 순간', emoji: '🐱' },
  { id: '2', title: '고양이 사진', slug: 'cat-pics', description: '멋진 컷, 비주얼 중심 게시판', emoji: '📸' },
  { id: '3', title: '자유게시판', slug: 'general', description: '일상, 잡담, 이야기 공유', emoji: '💬' },
  { id: '4', title: '고양이 정보', slug: 'tips', description: '사료, 건강, 행동, 관리 팁', emoji: '🐾' },
  { id: '5', title: '질문', slug: 'questions', description: '궁금한 점을 물어보세요', emoji: '❓' },
  { id: '6', title: '집사 일상', slug: 'daily-life', description: '집사 생활의 작은 기록', emoji: '🏠' },
  { id: '7', title: '공지사항', slug: 'notice', description: '서비스 업데이트와 안내', emoji: '📢' }
];

export const samplePosts: PostItem[] = [
  {
    id: 'p1',
    author: { name: '고양이바다', username: 'catsea', avatar: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=200&q=80' },
    createdAt: '2시간 전',
    category: '고양이 자랑',
    title: '오늘 아침에 낮잠 자는 우리집 랑이',
    content: '점심시간에 창가에 앉아서 미소를 짓는 모습이 너무 귀여워서 사진 한 장 남겨요. 오늘도 완벽한 집사 행복입니다.',
    tags: ['#냥스타그램', '#고양이자랑'],
    likes: 198,
    comments: 34,
    saves: 22,
    image: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'p2',
    author: { name: '루나냥', username: 'luna_cat', avatar: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=200&q=80' },
    createdAt: '4시간 전',
    category: '고양이 사진',
    title: '햇살이 좋은 오후, 창가 선글라스냥',
    content: '이 사진은 저희 집 고양이가 창가에서 휴식 중이던 순간이에요. 씩 웃는 표정이 너무 사랑스럽습니다.',
    tags: ['#고양이사진', '#캣타워'],
    likes: 276,
    comments: 51,
    saves: 19,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'p3',
    author: { name: '샤인냥', username: 'shinecat', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
    createdAt: '오늘',
    category: '고양이 정보',
    title: '고양이 예방접종 후 회복 관리 팁',
    content: '예방접종 이후 식욕 감소나 약간의 무기력함은 흔합니다. 수분 섭취를 유도하고, 활력 변화가 심하면 수의사와 상담해 주세요.',
    tags: ['#CatCare', '#고양이정보'],
    likes: 142,
    comments: 21,
    saves: 31,
    image: null
  }
];

export const notifications = [
  { id: 'n1', text: '루나냥님이 당신의 게시글을 좋아합니다.', time: '5분 전', unread: true },
  { id: 'n2', text: '샤인냥님이 댓글을 남겼습니다: 귀여워요!', time: '22분 전', unread: true },
  { id: 'n3', text: '관리자 공지: 커뮤니티 이용 가이드 업데이트', time: '1시간 전', unread: false },
  { id: 'n4', text: '고양이 사진 카테고리 인기 게시글 순위가 갱신되었습니다.', time: '3시간 전', unread: false }
];

export const people = [
  { id: 'u1', name: '고양이바다', username: 'catsea', bio: '모든 고양이의 귀여움을 존중합니다', followers: 3221, following: 188 },
  { id: 'u2', name: '루나냥', username: 'luna_cat', bio: '창밖을 바라보는 고양이의 삶을 기록합니다', followers: 1890, following: 94 },
  { id: 'u3', name: '샤인냥', username: 'shinecat', bio: '고양이 건강 정보와 생활 팁 공유', followers: 4203, following: 221 }
];
