import styles from "@/styles/components/team-member.module.scss";

type Props = {
  team: {
    name: string,
    memberList?: {
      name: string,
    }[],
  },
  addMember: () => {},
}
export default function TeamMember({ team, addMember }: Props) {

  return (
    <div className={styles.teamMember}>
      <div className={styles.profiles}>
        {team.memberList?.map((m, index) => {
          if (index < 5) {
            return (
              <div className={styles.profile}
                   style={{ backgroundColor: "#" + Math.round(Math.random() * 0xffffff).toString(16) }}>
                {m.name[0]}
              </div>
            )
          }
        })
        }
      </div>
      <button className={styles.addMember}
              onClick={addMember}
      >
        + 멤버 추가
      </button>
    </div>
  )
}
